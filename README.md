In this project, let's build a **Team Profile Card** app by applying the concepts we have learned till now.

You'll be provided with pre-filled code, including the basic React Code and the CSS styles.

Your task is to read the given code carefully and then complete the missing parts to achieve the expected output shown in the reference image.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/question-profile-card-output.png" alt="team-profile-card-output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- The `App` component should render three `TeamMemberCard` components by passing props to each one individually.

- Each `TeamMemberCard` component receives the following props:

  |    Key     | Data Type |
  | :--------: | :-------: |
  |    name    |  String   |
  |    role    |  String   |
  |  imageUrl  |  String   |
  | department |  String   |

- The `TeamMemberCard` component should accept props, destructure them, and display the team member details.

**Team Members Data:**

| Name           | Role                | Image URL                                                        | Department  |
| :------------- | :------------------ | :--------------------------------------------------------------- | :---------- |
| Sarah Johnson  | Frontend Developer  | https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person1.jpg        | Engineering |
| Michael Chen   | UI/UX Designer      | https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person2.jpg    | Design      |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.jsx`
- `src/components/TeamMemberCard/index.jsx`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Each `TeamMemberCard` should have an HTML image element with `alt` attribute value as the **name** prop
- Each `TeamMemberCard` should display the **name** using an HTML heading element
- Each `TeamMemberCard` should display the **role** using an HTML paragraph element
- Each `TeamMemberCard` should display the department text in the format: `Department: {department}`
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #f0f4f8; width: 150px; padding: 10px; color: black">#f0f4f8</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">#1e293b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">#475569</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">#ffffff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">#3b82f6</div>
<div style="background-color: #b4cde7; width: 150px; padding: 10px; color: black">#b4cde7</div>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you've been learning? Take a look at the Cheat Sheets.
