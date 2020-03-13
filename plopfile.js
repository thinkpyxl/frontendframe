module.exports = function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'block creation',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'block name please'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/blocks/{{lowerCase name}}/{{lowerCase name}}.css',
                templateFile: 'generators/block/block.css',
            },
            {
                type: 'add',
                path: 'src/blocks/{{lowerCase name}}/{{lowerCase name}}.js',
                templateFile: 'generators/block/block.js',
            },
            {
                type: 'add',
                path: 'src/blocks/{{lowerCase name}}/{{lowerCase name}}.twig',
                templateFile: 'generators/block/block.twig',
            },
        ]
    });
};