from django.http import HttpResponse,Http404
import datetime

def hello(request):
	return HttpResponse("Hello world")

def main(request):
	return HttpResponse("Main")

def time(request,offset):
	try:
		offset=int(offset)
	except Exception:
		raise Http404()
	now=datetime.datetime.now()+datetime.timedelta(hours=offset)
	html="<html><body>It is now %s,offset is %s.</body><html>" % (now,offset)
	return HttpResponse(html)	

"""def test(request):
	html="<html><body><iframe src=r"http://www.baidu.com"></iframe></body></html>"
	return HttpResponse(html)"""