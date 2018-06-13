from app.app import *

@get('/manager/login')
@view('signin.html')
def managerlogin():
	return {}

@post('/manage/login')
def api_login():
	username = request.json['username']
	password = request.json['password']
	return {'username':username,'password':password}