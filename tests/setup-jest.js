global.__NODE_ENV__ = 'test'
global.fetch = () => {
    console.log('fetch is mocked')
}
