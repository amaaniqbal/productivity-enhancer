## Overview
![Productivity Enhancer App](https://i.ibb.co/gTtL2x1/monday5.jpg)

The `Productivity Enhancer` app asks the employees to fill a form during their joining with some basic details namely Name, Email, Team, Role along with the time frame during which they find themselves to be most productive. The time frame is currently classified into three categories:
- Morning (9 AM - 12 PM)
- Afternoon (12 PM - 3 PM)
- Evening (3 PM - 6 PM)

This question is followed by a series of checkboxes comprising of one-hour breakdowns during which the given employee prefers to work. [This is expected to be taken in multiple `Time Tracking` formats in the future for more customized options]. It's currently suggested to check a minimum of 5 checkboxes corresponding to 5 dedicated hours of work, but it can easily be altered based on company needs.
After filling in this information, the employee can submit the form. 
The HR or the manager is then notified via a custom Email about the employee joining their team and a message is posted inside the `#team` channel of the specified workspace.

The intuition behind this is to make the working hours of an employee[within set boundaries of the company] transparent to the team so that they would not interrupt their fellow teammate during their recreation time. Any employee can see the details and the working hours of any other employee of the same company from the dashboard. They can then schedule meetings and interact accordingly.

Apart from this, the employees can also gather insight into the productive hours of all the employees via the visualizations option available in the dashboard. Currently, the bar chart and the donut chart is available inside the visualization dialog with an option to download in PNG, JPEG, PDF, SVG format or to print the same.

The HR and the managers can also use this dashboard to gather insights into the working hours of their team members allowing them to take intelligent customized decisions accordingly.

## Run the project

In the project directory, you should run:

### `npm install`

And then to run an application with automatic virtual ngrok tunnel, run:

### `npm start`

Visit http://localhost:4040/status and under "command_line section" find the URL. This is the public URL of your app, so you can use it to test it.
F.e.: https://021eb6330099.ngrok.io

## Configure Monday App 

1. Open monday.com, login to your account and go to a "Developers" section.
2. Create a new "QuickStart View Example App"
3. Open "OAuth & Permissions" section and add "boards:read" scope
4. Open "Features" section and create a new "Boards View" feature
5. Open "View setup" tab and fulfill in "Custom URL" field your ngrok public URL, which you got previously (f.e. https://021eb6330099.ngrok.io)
6. Click "Boards" button and choose one of the boards with some data in it.
7. Click "Preview button"
8. Enjoy the Quickstart View Example app!

## Release your app
1. Run script
### `npm run build`
2. Zip your "./build" folder
3. Open "Build" tab in your Feature
4. Click "New Build" button
5. Click "Upload" radio button and upload zip file with your build
6. Go to any board and add your just released view
7. Enjoy!
