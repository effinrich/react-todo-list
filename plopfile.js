/* eslint-disable quotes */
const requireField = fieldName => {
  return value => {
    if (String(value).length === 0) {
      return fieldName + ' is required'
    }
    return true
  }
}

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/style.js',
        templateFile: 'plop-templates/Component/style.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.stories.js',
        templateFile: 'plop-templates/Component/index.stories.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}'"
      },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},'
      }
    ]
  })

  plop.setGenerator('view', {
    description: 'Create a view',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your view name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/views/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/View/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/views/{{pascalCase name}}/__tests__/index.test.js',
        templateFile: 'plop-templates/View/__tests__/index.test.js.hbs'
      },
      {
        type: 'add',
        path: 'src/views/{{pascalCase name}}/style.js',
        templateFile: 'plop-templates/View/style.js.hbs'
      }
    ]
  })

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}.js',
        templateFile: 'plop-templates/service.js.hbs'
      },
      {
        type: 'add',
        path: 'src/services/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{camelCase name}} from './{{camelCase name}}'"
      },
      {
        type: 'append',
        path: 'src/services/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}},'
      }
    ]
  })

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.js',
        templateFile: 'plop-templates/hook.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/index.js',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{camelCase name}} from './{{camelCase name}}'"
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{camelCase name}}'
      }
    ]
  })
}
