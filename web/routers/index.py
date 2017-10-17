from app.app import *

@app.get('/')
@view('index.html')
def index():
	return dict(msg='1000')

@app.get('/statics/<path:path>')
def img(path):
	return static_file(path,'statics')