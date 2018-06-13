from app.app import *

@get('/')
@view('index.html')
def index():
	return dict(msg='1000')

@get('/statics/<path:path>')
def img(path):
	return static_file(path,'statics')

@get('/album')
@view('album.html')
def album():
	return {}