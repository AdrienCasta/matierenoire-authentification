# Fonction lambda d'authentification

Le projet export une fonction lambda pour authentifier un utilisateur.

Cette fonction est accessible depuis [https://matierenoire-authentification.adriencastagliola.now.sh](https://matierenoire-authentification.adriencastagliola.now.sh)

L'authentification ce fait en `POST` sur cette url, les paramètres d'authentifications sont à fournir dans le `body` de la requête.

```javascript
{
    password: 'Matierenoire',
    username: '1234',
}
```

La fonction retourne `success`, `failure` ou un message d'erreur.
