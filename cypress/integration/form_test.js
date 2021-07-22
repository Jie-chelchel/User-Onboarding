const usernameInput = () => cy.get("input[name='username']");
const emailInput = () => cy.get("input[name='email']");
const passwordInput = () => cy.get("input[name='password']");
const submitBtn = () => cy.get("button[id='submitBtn']");
const editBtn = () => cy.get("[data-cy='editBtn']");
const deleteBtn = () => cy.get("[data-cy='deleteBtn']");
const tosCheckbox = () => cy.get("input[name='service']");

describe("User Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("test", () => {
    expect(3 + 3).to.equal(6);
  });
  it("check for element showing right", () => {
    usernameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitBtn().should("exist");
    editBtn().should("exist");
    deleteBtn().should("exist");
    tosCheckbox().should("exist");
  });

  it("submit button disabled", () => {
    submitBtn().should("be.disabled");
  });

  it("can input username", () => {
    usernameInput()
      .should("have.value", "")
      .type("miao")
      .should("have.value", "miao");
  });

  it("can input email", () => {
    emailInput()
      .should("have.value", "")
      .type("sieae@gamil.com")
      .should("have.value", "sieae@gamil.com");
  });
  it("can input password", () => {
    passwordInput()
      .should("have.value", "")
      .type("ewfwfwfewfefewfewfewf")
      .should("have.value", "ewfwfwfewfefewfewfewf");
  });
  it("can check checkbox", () => {
    tosCheckbox().check();
    tosCheckbox().uncheck();
    cy.contains("You must accept Terms and Services");
  });
  it("form is invalid", () => {
    usernameInput().type("sss");
    passwordInput().type("kdkdkkkdkkddkdkkdkk");
    tosCheckbox().check();
    submitBtn().should("be.disabled");
  });
  it("can sumbit form", () => {
    emailInput().type("zhangjei@gmail.com");
    usernameInput().type("sss");
    passwordInput().type("kdkdkkkdkkddkdkkdkk");
    tosCheckbox().check();
    submitBtn().should("not.be.disabled");
    submitBtn().click();
    emailInput().should("have.value", "");
    usernameInput().should("have.value", "");
    passwordInput().should("have.value", "");
    cy.contains("sss");
    cy.contains("zhangjei@gmail.com");
  });

  it("can add a new user", () => {
    cy.contains(/aauwuwuw/).should("not.exist");
    emailInput().type("zhangjei@gmail.com");
    usernameInput().type("aauwuwuw");
    passwordInput().type("kdkdkkkdkkddkdkkdkk");
    tosCheckbox().check();
    submitBtn().click();
    cy.contains(/aauwuwuw/).should("exist");
  });
  it("can edit userinfo", () => {
    emailInput().type("zhangjei@gmail.com");
    usernameInput().type("sss");
    passwordInput().type("kdkdkkkdkkddkdkkdkk");
    tosCheckbox().check();
    submitBtn().should("not.be.disabled");
    submitBtn().click();
    cy.contains("sss").siblings("button:nth-of-type(1)").click();
    usernameInput().type("fffff");
    submitBtn().click();
    cy.contains("sssfffff");
  });

  it("delete a user", () => {
    emailInput().type("zhangjei@gmail.com");
    usernameInput().type("sss");
    passwordInput().type("kdkdkkkdkkddkdkkdkk");
    tosCheckbox().check();
    submitBtn().should("not.be.disabled");
    submitBtn().click();
    cy.contains("sss").siblings("button:nth-of-type(2)").click();
    cy.contains("sss").should("not.exist");
  });
});
