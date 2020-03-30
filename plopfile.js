module.exports = function (plop) {
    plop.setGenerator('atom creation', {
        description: 'atom creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'atom name please'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/atoms/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/atoms/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/atoms/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('molecule creation', {
        description: 'molecule creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'molecule name please'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/molecules/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/molecules/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/molecules/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('organism creation', {
        description: 'organism creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'organism name please'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/organisms/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/organisms/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/organisms/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });
};