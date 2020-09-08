# Guild Admin Root Template

This is a Guild admin-root starter project to get you started with creating an guild admin instance. This project is designed to be deployed into our guild admin framework.

## Setup
---
1. [Create a new github repo](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) from this repository template.
2. Once the repository is created, clone it to your local development enviroment.
3. Run `npx -p @guildeducationinc/guild-admin-bootstrapper create-guild-admin root` and follow the instructions
4. Run `yarn install`
5. Configure your `.env` files for each environment 
6. Push your branch to github


 You're root is all setup. It will be deployed into each env when the approoriate branch is pushed to github (`master`, `staging`, `production`)

## What is this?
This repo serves as a template for the root application of a new guild admin instance.


A guild admin instance includes
- Relevant AWS infrastcture for deployment and hosting
- A root application that bundles all subapplications deployed into the this root (more docs to come)
- Associated sub-applications that are deployed into a root application

A root instance controls the following global concerns:
- Navigation
- Auth (via auth0)

## Advanced Usage
### Bundling your application
---
<Explain the major parts of the repo, including>
- How sub apps are bundeled
- How to modify any part of the bundling process

# Future Ideas
- Automate the creation of AWS infrastructure for this admin interface via github repo webook and the parent of this repo (should be linked via the template relationship?)
- Create 

## Help
---
* For general questions or issues you have about this project, reach out to the Internal tools team via the slack channel `#internal-tools`.
