# Delete last release

## Usage

Add folowing lines to your action.yml file to delete the repositories last release.

### Example

```yml
uses: Janus451/delete_last_release@v1.5
with:
  github_token: ${{ secrets.GITHUB_TOKEN }}
```

### Inputs

github_token : ${{ secrets.GITHUB_TOKEN }} \
repository : ${ GITHUB_REPOSITORY } , Default =  current repository.
