*** Variables ***
${HOST}    https://pokeapi.co/api/v2/language/


*** Keywords ***
Consulta de Pokemons
    Verificar linguagem         linguagem
    Conferir Status Code    200


Verificar cor
    [Arguments]        ${NUMBER}
    Create Session     pokeAPI        ${HOST}${NUMBER}
    ${RESPOSTA}=        GET On Session     pokeAPI     ${HOST}${NUMBER}
    Set Test Variable        ${RESPOSTA}
    Dictionary Should Contain Item        ${RESPOSTA.json()}        name            ${NUMBER}

Conferir Status Code
    [Arguments]        ${STATUS_CODE}
    Should Be Equal As Strings    ${RESPOSTA.status_code}       ${STATUS_CODE}
