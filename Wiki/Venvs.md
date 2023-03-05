# Manage your Envs

## Hello! It's Cris here, I have a few commands that will help you to manage your venvs and use them in another computer!

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