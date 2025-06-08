This is end-to-end testing project using **Cypress** and **JavaScript**.  

🔗 https://ecommerce-playground.lambdatest.io

## What This Project Covers

✅ UI Testing with Cypress  
✅ Page Object Model (POM)  
✅ API Testing with `cy.request()`  
✅ API Mocking with `cy.intercept()`  
✅ Factory Pattern with Faker.js  
✅ Command Pattern with custom `cy.commands()`  
✅ Mobile responsiveness (viewport testing)  
✅ Negative scenarios  

## Project Structure

```
cypress/
├── e2e/                # End-to-end tests: UI, API, mobile, sorting, etc.
├── pages/              # Page Object classes for reusability
├── support/            # Custom commands and setup files
├── factories/          # Dynamic data generators (Faker.js)
├── fixtures/           # Static test data
├── reports/            # Mochawesome reports
└── screenshots/        # Screenshots on test failure
```

Tools & Tech:
- Cypress 14+
- JavaScript (ES6+)
- Faker.js (`@faker-js/faker`)
- Mochawesome (reporting)
- GitHub Actions (CI-ready)


Install dependencies:
npm install

Run:
npx cypress open
npx cypress run


##  Scripts

> Add these to your `package.json` for convenience:
```json
"scripts": {
  "test": "cypress run",
  "open": "cypress open",
  "report": "mochawesome-merge cypress/reports/*.json | marge -o mochawesome-report"
}
```

