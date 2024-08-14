# Committing

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages. This helps us generate changelogs and version releases. The commit message should be structured as follows:

```bash
<type>(optional scope): <description>
```

See more examples [here](#conventional-commits)

To find what types of commits are allowed, please refer to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) documentation or see `commitlint.config.js` file in the `rules` section.

To enforce **conventional commits** we use [commitlint](https://commitlint.js.org/#/) and [husky](https://typicode.github.io/husky/#/). The commitlint configuration is in the `commitlint.config.js` file and the husky configuration is in the `package.json` file.

## Conventional Commits

Conventional Commits is a standardized commit message format that enhances communication and collaboration within software development teams. It defines a structured template for commit messages that provide clear information about the purpose and impact of each commit. By adhering to this format, teams can automate tasks such as generating changelogs, versioning, and semantic versioning.

**Format**: `<type>(optional scope): <description>`
Where:

- `type`: The type of change that was made. Can be one of the following:
  - `feat/feature`: A new feature introduction or enhancement.
  - `fix/bug/bugfix`: A bug fix.
  - `docs`: Documentation-related changes.
  - `style`: Code style changes (e.g., formatting).
  - `refactor`: Code changes that neither fix a bug nor introduce a feature.
  - `test`: Adding or modifying tests.
  - `chore`: Maintenance tasks, build adjustments, etc.
- `scope`: The scope of the change (e.g., component or file name). Optional.
- `description`: A concise description of the change in imperative mood. It should be no longer than 72 characters and should not end with a period

**Examples**:
Here are some examples of properly formatted Conventional Commit messages:

```txt
- feat(user-auth): implement OAuth2 login
- fix(api): resolve null pointer exception in data processing
- docs(readme): add installation instructions
- style(ui): adjust button spacing for consistency
- refactor(database): optimize query performance
- test(unit): add unit tests for validation functions
- chore(build): update dependencies in build configuration
```

### Local Setup

To setup commitlint and husky locally run the following commands:

```bash
# If you already have a package.json file
npm i

# Or if you don't have a package.json file
npm i --save-dev @commitlint/{cli,config-conventional} husky

# Then
npx husky install

# NOTE: if you cloned the repo recently you might not need to run this command (check if the .husky folder exists):
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1} && pre-commit run'


```

Then you can test it by running:

```bash
git commit -m "foo: this will fail"
```

# Versioning

1. **Tagging Releases**: Whenever a significant feature or bug fix is completed and ready for release, developers should create a tagged release in Git. This could be done using `git tag` followed by the version number (e.g., v1.0.0) and a description of the release. See [About versions](#about-versions)

2. **Merge to Master**: All merges to the master branch should follow the Pull Request (PR) process. Developers must create a pull request targeting the master branch, and the PR should be reviewed by at least one other developer.

3. **Changelog Update**: After a PR is approved and merged into the master branch, the developer responsible for the merge should update the changelog (or make sure that the CI/CD pipeline does it automatically, if exists).

   - **Changelog Format**: The changelog should follow a structured format, including sections like "Added," "Changed," "Fixed," and "Removed," to categorize the changes.
   - **Entry Format**: Each entry should include the type of change (e.g., "Added:," "Changed:," etc.), a concise description of the change, and the associated PR or commit reference.

   We use a tool do automatically do so which is [git-cliff](https://git-cliff.org/).

4. **Regular Changelog Updates**: Changelog updates should be made at least 2-3 times a week, depending on the frequency of merges. If there are no changes to report, a brief note indicating that there are no updates should be added to the changelog.

## Merging

1. **Create PRs**: All changes, whether bug fixes or new features, must be submitted through pull requests. This promotes code review and ensures that changes are properly tested before merging.

2. **Single Responsibility Principle**: Each pull request should focus on a single, well-defined task. This makes code reviews easier and minimizes the chances of conflicts and regressions.

3. **Commit Messages**: Developers should write clear and descriptive commit messages that explain the purpose and context of the change. This helps others understand the change without needing to read the code.

4. **Code Reviews**: PRs should be reviewed by at least one other developer. Reviews should include checking the code quality, adherence to coding standards, and the overall impact of the change.

5. **Testing**: All code changes should be adequately tested to ensure that they function as intended and do not introduce new bugs. Automated tests should be run before merging.

6. **Branch Protection**: The master branch should be protected, requiring code reviews and passing automated tests before a merge is allowed.

7. **Documentation Updates**: If the change affects user-facing features or APIs, developers should also update the project's documentation accordingly.

### About versions

Version numbers in software development serve as a standardized way to communicate the state and progression of a software product. They consist of multiple digits separated by periods (e.g., 1.2.3).

We use the following versioning scheme: `MAJOR.MINOR.PATCH` - X.Y.Z as defined by [Semantic Versioning](https://semver.org/).

Each digit conveys specific information about the release. Here's an explanation of what each digit typically means:

1. **Major Version (X)**: This digit represents **significant changes** that might include backward-incompatible features or **major shifts** in functionality. Incrementing the major version usually indicates that the software has undergone **substantial updates** that could impact how it's used or integrated. Developers should be cautious when making major version updates, as they can require users to adapt their systems or code.

2. **Minor Version (Y)**: The minor version digit signifies smaller, backward-compatible changes and additions. These changes often include **new features**, **improvements**, or **enhancements** that do not break existing functionality or APIs. Developers can increment the minor version when they introduce new functionality without fundamentally altering the existing features.

3. **Patch Version (Z)**: The patch version digit is for **bug fixes**, **security updates**, and other **minor changes** that **do not introduce new features** or alter existing ones. These changes are generally backward-compatible and ensure that the software remains stable and secure. Patch version updates are essential for maintaining a healthy software ecosystem.

Examples:

1.  **Initial Release: 1.0.0**

    - Major version 1: Represents the first release with a specific set of features.
    - Minor version 0: No additional features or changes yet.
    - Patch version 0: No bug fixes or patches.

2.  **Addition of New Feature: 1.1.0**

    - Major version 1: No backward-incompatible changes.
    - Minor version 1: Introduces a new feature or enhancement.
    - Patch version 0: No bug fixes.

3.  **Bug Fix: 1.1.1**

    - Major version 1: No backward-incompatible changes.
    - Minor version 1: Existing features remain unchanged.
    - Patch version 1: Fixes a bug or vulnerability.

4.  **Major Overhaul: 2.0.0**

    - Major version 2: A significant change or overhaul that could impact existing integrations.
    - Minor version 0: Reset to 0 since it's a major version change.
    - Patch version 0: No bug fixes.

5.  **Bug Fixes After Major Overhaul: 2.0.1**
    - Major version 2: No backward-incompatible changes.
