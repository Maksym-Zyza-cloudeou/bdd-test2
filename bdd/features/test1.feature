# test1.feature
@math
@arithmetics
@multiplication
@runTimes=1
Feature: Test Bdd
Scenario: Check number multiplication
 Given first number is: 1000
 And second number is: 5000
 When multiply numbers
 Then result is: 5000