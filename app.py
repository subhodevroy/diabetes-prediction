# -*- coding: utf-8 -*-
"""
Created on Fri Mar 20 22:02:04 2020

@author: 1606516
"""
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__,static_folder='./static')
#app.config['SERVER_NAME']='localhost:3001'
CORS(app)
model = pickle.load(open('model1.pkl', 'rb'))

# @app.route('/predict')
# def home():
#     return render_template('Predict.js')

@app.route('/predict',methods=['POST'])
def predict():
        
        payload = request.json.values()
        values = [float(x) for x in payload]
    
        final_features = [np.array(values)]
        
        print(final_features)
    # Get the model's prediction
        output = model.predict(final_features)[0]
        output0=model.predict_proba(final_features)[:,0]
        output1=model.predict_proba(final_features)[:,1]
        if output==0:
            result= "CONGRATULATIONS!!You don't have diabetes.But please consult doctor.Your probability percentage is :{}".format(output0[0]*100)
        else:
            result= "You have diabetes.Please visit your doctor quickly..Your probability percentage is :{}".format(output1[0]*100)
       
        return jsonify(result)
if __name__ == "__main__":
    app.run(debug=True)
