---
title: 'How to make a Simple http web server to get started using Deno'
date: 2020-07-20 07:00:00
author: 'Lunaticsatoshi'
image: ../../images/denodemo.png
tags:
- code
- deno
- Project
- tech
---

First of all to start, we need to install Deno and this task is very easy for any operating system. See more at <a href="https://deno.land/#installation">DenoLand</a>.

<img src="data:image/png;base64,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">\
After Installation you can use the command Line tools to navigate around with deno. Run deno help to get more information\
```
$ deno --help
```
This entry point can be a JavaScript (.js) file or TypeScript (.ts) file. But the great news is the possibility to use a URL that points to an app entry point.

Deno’s website provides us with some great examples, like these.
```
$ deno run https://deno.land/std/examples/welcome.ts
Download https://deno.land/std/examples/welcome.ts
Compile https://deno.land/std/examples/welcome.ts
Welcome to Deno 🦕
```
You can also run a program using a file
```
import { welcome } from 'https://github.com/jaquiel/deno-features/raw/master/std/welcome.ts'

welcome()
```

Now getting back to what we intended to do in the begining i.e to make a deno server. Now that you know te basics of handling deno the task becomes really simple.

1. First Make a File named server.js
2. Now import serve and websockets from denoland
```
import { serve } from "https://deno.land/std/http/server.ts";
```
3. Now setup the server using the code
```
import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
```
4. After that run the server file using the following command
```
deno run --allow-net --allow-read server.js
```
So why the long way to run a file in deno when compared to node. In Deno's documentation it is clearly defined that deno is a secure runtime for JavaScript and TypeScript. To access to security-sensitive areas or functions, you must use permissions on the command line. Thus we need to specify the --allow-net and --allow-read flags to run a deno program in your system.

You can find the basic documentaion regarding this on <a href="https://deno.land/std/http">Deno Http</a>

Now that you know the basics of deno we can now move to making a basic chat app using Deno but lets save that for the next time.