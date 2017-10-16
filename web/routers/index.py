from app.app import *

@app.get('/')
@view('index.html')
def index():
	return {}

@app.get('/statics/<path:path>')
def img(path):
	return static_file(path,'statics')