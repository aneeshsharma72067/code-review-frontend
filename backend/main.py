import json
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

schema = {
    "name": "analyzeCodeQuality",
    "description": "Analyzes code quality and provides a score and suggestions.",
    "parameters": {
        "type": "object",
        "properties": {
            "score": {"description": "The code quality between 0 and 100", "type": "integer"},
            "suggestions": {
                "description": "Suggestions to improve the code",
                "type": "array",
                "items": {"type": "string"},
            },
        },
        "required": ["score", "suggestions"],
    },
}

optimization_schema = {
    "name": "optimizeCode",
    "description": "Optimize the code for better performance",
    "parameters": {
        "type": "object",
        "properties": {
            "optimized_code":{
                "description":"The optimized code",
                "type":"string"
            }
        },
        "required": ["optimized_code"],
    },
}

model = genai.GenerativeModel('gemini-2.0-flash')

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze_code():
    code = request.json.get('code')
    if not code:
        return jsonify({"error": "No code provided"}), 400
    prompt = f"""{code}"""

    response = model.generate_content(prompt, tools=[{'function_declarations': [schema]}])
    print(response)
    if hasattr(response, 'candidates') and len(response.candidates) > 0:
        candidate = response.candidates[0]
        if hasattr(candidate, 'content') and hasattr(candidate.content, 'parts'):
            function_call = candidate.content.parts[0].function_call  # Correcting the index here
            if function_call:
                args = function_call.args
                score = args.get('score')
                suggestions = args.get('suggestions')
                suggestions_list = [suggestion for suggestion in suggestions]
                result = {"score": score, "suggestions": suggestions_list}
                return jsonify(result)
            else:
                print("No function call found in the response.")
                return jsonify({"error": "Function call failed or no function call was made."}), 500
        else:
            print("Invalid response structure: missing parts or content.")
            return jsonify({"error": "Invalid response structure."}), 500
    else:
        print("Invalid response structure: no candidates found.")
        return jsonify({"error": "Invalid response structure."}), 500

@app.route('/optimize', methods=['POST'])
def optimize_code():
    code = request.json.get('code')
    if not code:
        return jsonify({"error": "No code provided"}), 400
    prompt = f"""{code}"""

    response = model.generate_content(prompt, tools=[{'function_declarations': [optimization_schema]}])
    print(response)
    if hasattr(response, 'candidates') and len(response.candidates) > 0:
        candidate = response.candidates[0]
        if hasattr(candidate, 'content') and hasattr(candidate.content, 'parts') and len(candidate.content.parts) > 0:
            function_call = candidate.content.parts[0].function_call  # Correcting the index here
            if function_call:
                args = function_call.args
                optimized_code = args.get('optimized_code')
                result = {"optimized_code": optimized_code}
                return jsonify(result)
            else:
                print("No function call found in the response.")
                return jsonify({"error": "Function call failed or no function call was made."}), 500
        else:
            print("Invalid response structure: missing parts or content.")
            return jsonify({"error": "Invalid response structure."}), 500
    else:
        print("Invalid response structure: no candidates found.")
        return jsonify({"error": "Invalid response structure."}), 500


if __name__ == '__main__':
    app.run(debug=True)