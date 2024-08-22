#!/usr/bin/env node

import chalk from "chalk";

console.log(chalk.bold("\n-------------------About Me-------------------"));
console.log(chalk.bold("\nName: ") + "Sagar Maiti");
console.log(chalk.bold("Email: ") + "sagarmaiti277@gmail.com");
console.log(
  chalk.bold("Tech Stack: ") +
    "TypeScript, ReactJs, NextJs, NodeJs, ExpressJs, MongoDB, AWS"
);
console.log(
  chalk.bold("Education: ") +
    "BTech - CSE 23"
);
console.log(
  chalk.bold("Location: ") +
    "Bengaluru - India"
);

console.log(chalk.bold("Favorite Line: ") + "What's Life Without Risk ?");

console.log(chalk.bold("\n----------------Find me online----------------\n"));
console.log(
  chalk.hex("#0077b5").bold.underline("LinkedIn: ") +
    chalk.hex("#0077b5").underline("https://www.linkedin.com/in/sagarmaiti26")
);
console.log(
  chalk.hex("#f1502f").bold.underline("GitHub: ") +
    chalk.hex("#f1502f").underline("https://github.com/sagarmaiti26")
);

console.log(
  chalk.green.bold.underline("Portfolio: ") +
    chalk.green.underline("https://sagarmaiti.vercel.app")
);
console.log(
  chalk.hex("#1da1f2").bold.underline("Twitter: ") +
    chalk.hex("#1da1f2").underline("https://twitter.com/sagarmaiti26")
);
