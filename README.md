Starter React-Redux
=================

1. #### Import your model

- Get a local copy of this model
```
git clone https://github.com/maclaude/starter-react.git

# OR (with SSH)

git clone git@github.com:maclaude/starter-react.git
```

2. #### Copy the model inside your new project repository

- At the root directory where your `starter-react` folder is located, clone your project repository.
- Go to your project repository
```
cd project-repository
```
- Execute the following commands to copy folders / files / hidden files inside your project folder

```
# Recursive copy of the model folder (excluding .git directory)
rsync -r --exclude '.git' ../starter-react/ .
```

3. #### Install the dependencies

- `yarn`

4. #### Start the server

- `yarn start`
 
5. __Your are good to go__ :v:
