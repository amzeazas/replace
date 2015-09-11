describe('replace', function() {
  it('replaces a given word in a string with another given word', function() {
    var test_string = "This is my cool test string.";
    expect(test_string.replace("cool", "awesome")).to.equal("This is my awesome test string.");
  });
});
