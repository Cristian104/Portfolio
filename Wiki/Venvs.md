# Manage your Envs

## Hello! It's Cris here, I have a few commands that will help you to manage your venvs and use them in another computer!

*It's generally not recommended to migrate a virtual environment between computers, as there may be differences in the system configuration that can cause issues with the environment. It's generally better to create a new virtual environment on the new computer and install the necessary packages from scratch.* 

In order to create a venv user the following command in the current workspace of the project:\
    ```
    py -m venv "Name of your venv"
    ```

In order to create the list of your actual venv for installing it into another computer use the following command:\
    ```
    pip freeze > requirements.txt
    ```

In order to create a venv from a list use the following command:\
    ```
    pip install -r requirements.txt
    ```

Now... what if we need to load our venv? We usually create a Python file for new venvs; but that's not actually necessary. We can just load the activate file direclty from our terminal:\
    ```
    myenv\Scripts\activate.bat or myenv\Scripts\activate.ps1
    ``` >> **Depends on your system. And with that you'll be able to enter to your local Venv**
