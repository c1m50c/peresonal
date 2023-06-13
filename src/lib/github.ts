export const fetchGithubReadme = async (
    owner: string, 
    repository: string,
    branch: string,
): Promise<string> => {
    const githubRawUserContent = `https://raw.githubusercontent.com/${owner}/${repository}/${branch}/README.md`;
    const response = await fetch(githubRawUserContent);
    return response.text();
};