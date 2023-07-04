3.Explain what is execution context in detail with diagram.

Ans: Execution context is the concept for describing the internal working of a code. In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. During the execution context, the specific code gets parsed line by line then the variables and functions are stored in the memory. An execution context is similar to a container that stores variables, and the code gets evaluated and then executed. Thus, it is the execution context that provides an environment for the specific code to get executed.

The types of execution context in JavaScript are:

Global Execution Context/GEC==>The default execution context created when the JavaScript engine starts running the code, representing the outermost scope.
Functional Execution Context/FEC==>An execution context created when a function is invoked, containing the function's arguments, local variables, and references to the outer environment.
Eval Execution Context==> An execution context created when the eval() function is invoked, allowing the execution of dynamically generated code or code from strings.
                                         +-----------------------+
                                         |    Global Execution   |
                                         |      Context          |
                                         |                       |
                                         |    Variable Object    |
                                         |   globalVar: "Global" |
                                         |   outerFunction: ref  |
                                         +-----------|------------+     
                                                     |
                                                     |
                                                     |
                                                     |
                                                     |
                                                     |
                                                     |
                                                     | [Outer Environment]
                                                     |
                                                     |
                                             +-----------------------+
                                             | Function Execution    |
                                             |      Context          |
                                             |                       |
                                             |  Arguments            |
                                             |  outerParam: "Outer Param"|
                                             |  Local Variables      |
                                             |  outerVar: "Outer"   |
                                             |  [[Scope]]            |
                                             |-----------------------+
                                                     |
                                                     |
                                                     |
                                                     |
                                                     | [Outer Environment]
                                                     |
                                                     |
                                             +-----------------------+
                                             | Function Execution    |
                                             |      Context          |
                                             |                       |
                                             |  Arguments            |
                                             |  innerParam: "Inner Param"|
                                             |  Local Variables      |
                                             |  innerVar: "Inner"   |
                                             |  [[Scope]]            |
                                             |-----------------------+
