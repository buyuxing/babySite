from routers import *
try:
    app.run(host='192.168.31.199', port=8080, server = 'auto')
except OSError as identifier:
    app.run(host='127.0.0.1', port=8080, server = 'auto')

