// describe("Load", () => {
//   it("Should confirm that true is equal to true", () => {
//     expect(true).to.equal(true);
//   })
describe("Single Movie view flow", () => {
  it("Should display tricks on load", () => {
    cy.visit("http://localhost:3000/");
    .contains("regular treflip")
    .contains("switch heelflip")
    .contains("regular frontside 50-50, backside 180 out")
  });

  it("Should have a header with text Sick Trick Wish List on load", () => {
    cy.visit("http://localhost:3000/?").contains("Sick Trick Wish List");
  })

  it("Should contain a search bar on load", () => {
    cy.get('form input[placeholder="Name of Trick"]')
      .get('form input[type="text"]')
      .get('form input[name="name"]')
  })

})
