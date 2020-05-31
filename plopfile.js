module.exports = function (plop) {
    plop.setGenerator('archive creation', {
        description: 'archive creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter archive name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/archive/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/archive/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/archive/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('block creation', {
        description: 'block creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter block name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/block/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/block/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/block/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('component creation', {
        description: 'component creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter component name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/component/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/component/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/component/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('four-oh-four creation', {
        description: 'four-oh-four creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter four-oh-four name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/four-oh-four/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/four-oh-four/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/four-oh-four/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('global creation', {
        description: 'global creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter global name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/global/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/global/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/global/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('search creation', {
        description: 'search creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter search name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/search/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/search/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/search/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });

    plop.setGenerator('single creation', {
        description: 'single creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter single name'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/single/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/basic/basic.css',
            },
            {
                type: 'add',
                path: 'src/single/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/basic/basic.js',
            },
            {
                type: 'add',
                path: 'src/single/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/basic/basic.twig',
            },
        ]
    });
};