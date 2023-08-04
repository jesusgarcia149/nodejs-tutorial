# REPL

## Commands Basics
- view version
```javascript
    node --version
```
- enter int node
```javascript
    node
```
- list commands
```javascript
    .help
```
- sum
```javascript
    10 + 10
```
`>>> 20`
- console log
```javascript
    console.log("hellow world");
```
`>>> hellow world`
- Math random
```javascript
    Math.random() * 10
```
`>>> 8.03974244588775`
- var
```javascript
    let name = 'hi';
```
`>>> hi`
- const
```javascript
    const pi = 3.1416;
```
```javascript
    pi
```
`>>> 3.1416`
- loops
```javascript
    let x = 0;
    do {
        x++;
        console.log(x);
    }
    while (x < 10)
```

```javascript
>>> 1
>>> 2
>>> 3
>>> 4
>>> 5
>>> 6
>>> 7
>>> 8
>>> 9
>>> 10
```

- Intervals
```javascript
    setInterval(()=> console.log('Hello'), 1000);
```

- system info
```javascript
    process
```
`>>> system info `

- system info
```javascript
    process.version
```
`>>> vXX.XX `

- os user info
```javascript
    os.userInfo()
```
```
>>>
    {
    uid: x,
    gid: x,
    username: 'x',
    homedir: 'C:\\Users\\x',
    shell: x
    }
```
- user dir
```javascript
    process.cwd()
```
`>>>'C:\\Users\\Administrador1'`

- node execute
- 1
```javascript
    node -e console.log("10 + 10")
```
`>>> 20`
- 2
```javascript
    node -e console.log(os.userInfo())
```
```
>>>
    {
    uid: x,
    gid: x,
    username: 'x',
    homedir: 'C:\\Users\\x',
    shell: x
    }
```
- 3
```javascript
    const names = ['joe', 'john', 'maria'];
    names
```
```
    >>> ['joe', 'john', 'maria']
```
- 4
```javascript
    const newNames = names.map(name => `Hellow ${name}`);
    newNames
```
```
    >>> [ 'Hellow joe', 'Hellow john', 'Hellow maria' ]
```
- Save all commands writed
```javascript
    .save commands.js
```
- Load all commands writed
```javascript
    .load commands.js
```