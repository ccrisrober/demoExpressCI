# demoExpressCI
## Plugins
- Github
- NodeJS
## Bash script
```bash
npm install 
mocha --recursive -R xunit test/ > test-reports.xml
```
## After finish (JUnit)
```bash
test-reports.xml
```