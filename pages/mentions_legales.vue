<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-col cols="10">
        <h1 class="display-1 my-5 primary--text">MENTIONS LÉGALES</h1>
        <p class="body-1">ECHAPPEE-COPRO.ORG</p>
        <p class="body-1">Le présent site est une création d'Alexis GERMAIN</p>
        <p class="body-1">Nom du site : www.echappee-copro.org</p>
        <p class="body-1">Email : contact@echappee-copro.org</p>
        <p class="body-1">Directrice de publication : Manon LEROY</p>
        <p class="body-1">Adresse : 4 Avenue de Saint Germain</p>
        <p class="body-1">31000 TOULOUSE</p>
        <p class="body-1">Crédits photographiques : https://unsplash.com/</p>

        <h1 class="display-1 my-5 primary--text">Hébergerment</h1>
        <p class="body-1">
          Gandi, Société par Actions Simplifiée au capital de 2.300.000€ ayant
          son siège social au 63-65 boulevard Masséna à Paris 75013 France
        </p>
        <p class="body-1">
          immatriculée sous le numéro 423 093 459 au RCS de Paris
        </p>
        <p class="body-1">N° TVA : FR 81423093459</p>
        <p class="body-1">
          L'utilisateur du site Internet reconnaît disposer de la compétence et
          des moyens nécessaires pour accéder et utiliser ce site. Il reconnaît
          également avoir pris connaissance de la présente notice légale et
          s'engage à la respecter.
        </p>
        <p class="body-1">
          L'utilisateur dispose d'un droit d'accès, de modification, de
          rectification et de suppression des données qui le concernent (article
          34 de la loi " Informatique et Libertés "). Pour l'exercer,
          l'utilisateur peut s'adresser auprès du Directeur de la publication
          visé plus haut.
        </p>
        <p class="body-1">
          Toute représentation totale ou partielle de ce site par quelque
          procédé que ce soit, sans l'autorisation expresse de l'exploitant du
          site Internet est interdite et constituerait une contrefaçon
          sanctionnée par les articles L 335-2 et suivants du Code de la
          propriété intellectuelle.
        </p>
        <p class="body-1">
          Il en est de même des éventuelles bases de données figurant sur le
          site Internet qui sont protégées par les dispositions de la loi du 11
          juillet 1998 portant transposition dans le Code de la propriété
          intellectuelle (CPI) de la directive européenne du 11 mars 1996
          relative à la protection juridique des bases de données.
        </p>
        <p class="body-1">
          Les marques de l'exploitant du site Internet et de ses partenaires,
          ainsi que les logos figurant sur le site sont des marques (semi
          figuratives ou non) déposées.
        </p>
        <p class="body-1">
          Les liens hypertextes mis en place dans le cadre du site Internet en
          direction d'autres ressources présentes sur le réseau de l'Internet,
          et notamment vers ses partenaires ont fait l'objet d'une autorisation
          préalable expresse et écrite.
        </p>

        <p class="body-1">
          Les utilisateurs visiteurs du site Internet ne peuvent mettre en place
          un hyperlien en direction de ces sites sans l'autorisation expresse et
          préalable de l'exploitant du site Internet
        </p>
        <nuxt-link to="/">
          <v-btn dark class="btn button ma-5" outlined
            >RETOUR à L'accueil</v-btn
          >
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Mentions Légales',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style></style>
