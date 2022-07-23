#!/usr/bin/env node

/* 
 ________  ________   ________  ________  _______   ___      ___ 
|\   __  \|\   __  \ |\_____  \|\   ___ \|\  ___ \ |\  \    /  /|
\ \  \|\  \ \  \|\  \ \|___/  /\ \  \_|\ \ \   __/|\ \  \  /  / /
 \ \   _  _\ \  \\\  \    /  / /\ \  \ \\ \ \  \_|/_\ \  \/  / / 
  \ \  \\  \\ \  \\\  \  /  / /__\ \  \_\\ \ \  \_|\ \ \    / /  
   \ \__\\ _\\ \_______\/__/ /\__\\ \_______\ \_______\ \__/ /   
    \|__|\|__|\|_______||__|/\|__| \|_______|\|_______|\|__|/    
*/

import inquirer from 'inquirer';

inquirer.prompt([
	{
		name: 'name',
		message: 'What is your name?',
		type: 'input',
		default: 'John Doe',
	},
]);