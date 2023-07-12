
export const getEnvVariables = () => {

    import.meta.env.PROD

    return {
        ...import.meta.env
    }
}
