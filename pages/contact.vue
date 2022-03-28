<template>
  <div fluid fill-height class="bg-blanc">
    <section>
      <v-img>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
    <section>
      <v-row class="justify-center align-center mt-5">
        <v-col cols="12" class="d-flex justify-center align-center">
          <h1 class="headline primary--text">NOUS CONTACTER</h1>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center mb-7">
        <v-col cols="12">
          <v-row class="d-flex justify-center align-center">
            <v-col
              cols="10"
              md="6"
              sm="10"
              class="d-flex justify-center align-center"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :ripple="{ class: 'primary--text' }"
                  color="#ffffeb"
                  :elevation="hover ? 14 : 4"
                  height="200"
                  min-width="300"
                  max-width="500"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline primary--text mb-1"
                        >L'ÉCHAPPÉE DES COPROPRIÉTÉS</v-list-item-title
                      >
                      <v-list-item-subtitle class="mt-3">
                        <v-icon size="20">{{ mdiMapMarkerRadius }}</v-icon
                        >&nbsp;Toulouse - 31000
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="mt-3">
                        <v-icon size="20">{{ mdiPhone }}</v-icon
                        >&nbsp;01.01.01.01.01
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-card-actions
                    class="mt-3 d-flex justify-center align-center"
                  >
                    <a
                      href="https://facebook.com/Lechappeedescoproprietes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-btn class="mx-4" color="primary" icon>
                        <v-icon size="24px">{{ mdiFacebook }}</v-icon>
                      </v-btn>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/l-echappee-des-coproprietes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-btn class="mx-4" color="primary" icon>
                        <v-icon size="24px">{{ mdiLinkedin }}</v-icon>
                      </v-btn>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-btn class="mx-4" color="primary" icon>
                        <v-icon size="24px">{{ mdiYoutube }}</v-icon>
                      </v-btn>
                    </a>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
              cols="10"
              md="6"
              sm="10"
              class="d-flex justify-center align-center"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :ripple="{ class: 'primary--text' }"
                  color="#ffffeb"
                  :elevation="hover ? 14 : 4"
                  height="560"
                  width="500"
                  class="pa-5 justify-center align-center"
                >
                  <v-form
                    class="pa-5 justify-center align-center"
                    action="https://formsubmit.co/manon.leroy@echappee-copro.org"
                    method="POST"
                    v-model="form"
                  >
                    <v-text-field
                      type="text"
                      name="Nom"
                      ref="nom"
                      placeholder="Dupont"
                      label="Nom :"
                      required
                      :rules="rules.name"
                      color="primary"
                    ></v-text-field>

                    <v-text-field
                      type="email"
                      name="Email"
                      ref="email"
                      placeholder="exemple@exemple.com"
                      label="Email :"
                      :rules="[rules.email]"
                      color="primary"
                    ></v-text-field>

                    <v-text-field
                      type="text"
                      name="Numéro_de_Téléphone"
                      ref="telephone"
                      placeholder="0606060606"
                      mask="##########"
                      label="Téléphone :"
                      required
                      :rules="rules.name"
                      color="primary"
                    ></v-text-field>
                    <v-text-field
                      type="text"
                      name="Sujet"
                      ref="sujet"
                      placeholder="Sujet du message"
                      mask="##########"
                      label="Sujet :"
                      required
                      :rules="rules.name"
                      color="primary"
                    ></v-text-field>
                    <input type="hidden" name="_captcha" value="true" />
                    <input type="text" name="_honey" style="display: none" />
                    <input
                      type="hidden"
                      name="_next"
                      value="http://www.echappee-copro.org/"
                    />
                    <v-textarea
                      name="Message"
                      placeholder="Votre Message"
                      color="primary"
                    ></v-textarea>

                    <v-btn
                      color="primary"
                      type="submit"
                      value="Send"
                      :disabled="!form"
                      >Envoyer</v-btn
                    >
                  </v-form>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-img>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </section>
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiLinkedin,
  mdiYoutube,
  mdiPhone,
  mdiMapMarkerRadius,
} from '@mdi/js'
export default {
  data() {
    return {
      mdiMapMarkerRadius,
      mdiPhone,
      mdiFacebook,
      mdiLinkedin,
      mdiYoutube,
      form: false,
      rules: {
        name: [(val) => (val || '').length > 0 || 'Ce champ est obligatoire'],
        email: (v) => (v || '').match(/@/) || 'Entrer une adresse email valide',
      },
    }
  },
  head() {
    return {
      title: 'Contact',
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
