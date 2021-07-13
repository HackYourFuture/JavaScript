# How to hand in homework

In this module you'll submit your homework only using GIT and GitHub.

1. [GitHub](https://www.github.com/HackYourFuture/JavaScript)

## 1. GitHub homework guide

<a href="http://www.youtube.com/watch?feature=player_embedded&v=CpYARPYGQU8" target="_blank"><img src="./assets/submit-homework.png" width="400" height="250" alt="HYF Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your homework:

ONE TIME ONLY (START OF EVERY MODULE)

1. Create a [fork](https://help.github.com/en/articles/fork-a-repo) of the homework module repository. For JavaScript (as well as the next 2 modules), the homework module repository is `https://www.github.com/HackYourHomework/Homework-classXX` where XX is your class number. You do this by using the `fork` option on the top right.
2. Navigate to the URL of the cloned repository (it should be in your personal GitHub account, under "repositories").
3. Clone the repository, using SSH¹, to your local machine. You can do this by typing in `git clone <git url>` in the command line.
4. On your local machine, navigate to the folder using the command line.
5. Make sure you've cloned it correctly by running `git status` from the command line.
6. This homework repository is a little special, have a look through the README how it all works!

EVERY WEEK

1. Do a `git pull` on your main branch to get the latest version.
2. Create a new branch for each week you have homework. For example, for the week 3 homework² for JavaScript create a branch called `YOUR_NAME-w3-JavaScript`. Don't forget to checkout this branch after creating it. You should not modify the `main` branch.
3. Make your homework!
4. Once you're finished, add your homework to a commit. There will be some test and config files added by the test runner, this is expected and should be added!
5. Create the commit (`git commit`). Make the commit message meaningful, for example `Finished project for homework week 3`.
6. Push the branch to your forked repository.
7. On the GitHub page of your forked repository, click on the `create pull request` button. Make sure the `base repository` is the `Homework-classXX` repository, on branch `main`.
8. Give the pull request a title in the following format:

```markdown
Homework week 3 <Your name>
```

9. Submit the pull request from your forked repository branch into the `main` branch.

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!

Notes:

1. If you are in an AZC you may need to use HTTPS instead as the AZC may have blocked the network protocol used by SSH.
2. This first week for which you need to submit homework is week 3 of the JavaScript module.
