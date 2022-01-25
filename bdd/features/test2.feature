# test2.feature
@math
@arithmetics2
@MathPow
@runTimes=1
Feature: Test Bdd
Scenario: Math Pow number
 Given number is: 2
 And pow is: 100
 When number in pow
 Then result is: 1024
