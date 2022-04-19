from imp import reload
import uvicorn

if __name__=="__main__":
    uvicorn.run("app.api:app", port=8000, reload=True)

    # Here, we told the main.py to run the uvicorn server
    # on port 8000 and set reload to true (should be false if app is to be deployed)