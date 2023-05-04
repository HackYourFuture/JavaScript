# Wallet Exercise

> Created by the one and only Jim, you can find him on our [Slack](https://hackyourfuture.slack.com/team/U383PTTK9) and on [GitHub](https://github.com/remarcmij)!

This week's prep exercise is going to be all about how to solve the same thing in many different ways using all of the tools we have learned so far. In this folder you will find five different exercise files that all use a different technique:

1. Closures
2. Classes
3. Objects (factory functions)
4. Objects where the methods are shared
5. Prototypes

## Assignment

Add a _maximum daily withdrawal_ feature to _each_ of the different wallet implementations. As an example, in `ex1-closure.js` the new functionality has already been implemented.

1. Add two data values to the wallet:

   - A variable/property `dailyAllowance` indicating the maximum amount that can be withdrawn per day. Set the default value to 40.
   - A variable/property `dayTotalWithdrawals` that holds the total amount withdrawn during the day, initially zero.

2. Add a method `resetDailyAllowance()`. It should reset `dayTotalWithdrawals` to zero. Assume that the issuer of the wallet (e.g. a bank) will call this function at the start of a new day.

3. Add a method `setDailyAllowance(newAllowance)` to set/update the maximum daily allowance (`dailyAllowance`). Assume that the issuer of the wallet (e.g., a bank) will call this function after approving a request from the wallet owner to update the daily allowance.

4. Update the other methods as required to support the new functionality.

## Some help

As this will not be easy, let's go through a few of the concepts again but then specifically to this exercise:

### Public Interface vs Private Implementation

Imagine that our various wallet implementations (however simplistic they may be) will be used as libraries by third party developers, perhaps as part of a banking application. We would expect those developers to access the functionality of our wallet through the methods that we specifically provide for that purpose. We consider that to be the _public interface_ of our wallet, i.e. a contract between ourselves as library owner and the users of the library. If third party developers would be allowed to manipulate the internals of the wallet (e.g. `cash`, `dailyAllowance`, etc.) we can no longer guarantee its correct functioning. We consider those internals to be _private implementation details_, and we would want the reserve the right to make implementation changes/improvements. So long as such changes have no impact on what can be observed through the _public interface_ (i.e. we honour the "contract") there should not be a problem.

In the _closure_ version of our wallet the internal values (`cash`, `dailyAllowance`, etc.) are well protected against unwanted modification. Those values are simply not accessible outside of the `createWallet()` function.

In the other (object-based) versions the private properties are accessible and prone to unwanted modification unless we take measures to either indicate that those properties are to be considered private or actually make those properties inaccessible from the outside.

When working with regular JavaScript objects there is no easy way to hide "private" properties. As a remedy, developers have adopted a naming convention over the years for such properties in plain old JavaScript objects: they begin the property names with an underscore character, e.g.:

```js
_cash, _name;
```

While this does not protect properties against undesired access we can least indicate to other developers that such properties are to be considered _private_, i.e. not to be accessed or manipulated directly.

> For more information, see this StackOverflow question: [Is the underscore prefix for property and method names merely a convention?](https://stackoverflow.com/questions/4484424/is-the-underscore-prefix-for-property-and-method-names-merely-a-convention)

Until fairly recently we had no alternative to do the same when using ES6 `class` syntax. However, in ES2022, now well supported in modern, evergreen browsers we have the ability to make class fields truly private, by using a `#` prefix:

```js
#hash, #name;
```

> More information on MDN: [Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

### Getters and Setters

Sometimes we _do_ want to provide access to internal object/class fields, but in a controlled way through the _public interface_. In this case we can use _getters_ and _setters_. For instance, if we want to give readonly access to a private field we can provide a _getter_ method (but no _setter_) that just returns the value of the private field. For instance:

```js
getCash() {
  return this._cash;
}

getName() {
  return this._name;
}
```

In a _setter_ method we could add validations to ensure that only valid values are accepted before updating the private field, e.g.:

```js
setEmail(email) {
  // See: https://www.regular-expressions.info/index.html
  if (/^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.test(email)) {
    this._email = email
  } else {
    console.error('Invalid email address!');
  }
}
```

In ES6 classes you can use special _getters_ and _setters_. You will find an example of an ES6 _getter_ in the `ex2-classes.js`.

```js
get name() {
  return this.#name;
}
```

You can now access `name` with property syntax (i.e., without parentheses):

```js
console.log(myWallet.name);
```

> More information on ES6 getters and setters on MDN:
>
> - [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
> - [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

## Things to think about

- The 5 different ways all have their advantages and disadvantages. Which way did you prefer? Why?
- Which did you find easiest to understand?
- How much did you change in the `main` function of each of them? Why is that important?
