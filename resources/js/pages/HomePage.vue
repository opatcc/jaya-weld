<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    hide-delimiters
    cycle
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      fit
    ></v-carousel-item>
  </v-carousel>
  <v-img
    fit
    src="https://cdn1.npcdn.net/userfiles/18940/image/header1(1).jpg"
  ></v-img>
  <h1 class="text-center my-5" style="color: #68b900;">Products</h1>
  <v-card
    flat
  >
    <v-row>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/1556767224e17045be8098c323a4fc84e2f048f57f.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD PWT-MIG350/500 MIG WELDING MACHINE C/W 9M EXTENSOIN WIRE CABLE SET (IGBT)</p>
      </v-col>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/1535334875e6320639f3298a38c7332e1ba2950b3f.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD J-MIG 200I WITH 9MTR EXTERNAL FULL COVERED WIRE FEEDER INVERTER WELDER</p>
      </v-col>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/15353341698db4e55a6bcefc559e9fe669520256ca.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD J-MIG 280I WITH 9MTR EXTERNAL FULL COVERED WIRE FEEDER INVERTER WELDER</p>
      </v-col>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/1556767224e17045be8098c323a4fc84e2f048f57f.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD PWT-MIG350/500 MIG WELDING MACHINE C/W 9M EXTENSOIN WIRE CABLE SET (IGBT)</p>
      </v-col>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/1535334875e6320639f3298a38c7332e1ba2950b3f.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD J-MIG 200I WITH 9MTR EXTERNAL FULL COVERED WIRE FEEDER INVERTER WELDER</p>
      </v-col>
      <v-col
        col="12"
        md="4"
        style="min-height: 400px; max-height: 400px;"
      >
        <v-img
          min-height="300"
          max-height="300"
          fit
          src="https://cdn1.npcdn.net/image/15353341698db4e55a6bcefc559e9fe669520256ca.jpg?md5id=610ceeb94cb57c1d8f401397ebf7d67f&new_width=350&new_height=350&w=1684999119"
        ></v-img>
        <p class="text-center">MASTERWELD J-MIG 280I WITH 9MTR EXTERNAL FULL COVERED WIRE FEEDER INVERTER WELDER</p>
      </v-col>
      <v-col
        col="12"
        class="text-center mb-2"
      >
        <v-btn to="/products" rounded size="large" append-icon="mdi-arrow-right" color="#68b900">Browse Products</v-btn>
      </v-col>
    </v-row>
  </v-card>

  <h1 class="text-center my-5" style="color: #68b900;">Official Partners</h1>
  <v-img
    fit
    src="https://cdn1.npcdn.net/userfiles/18940/image/brands(1).jpg"
  ></v-img>

  <h1 class="text-center my-5" style="color: #68b900;">Locate & Contact Us</h1>
  <v-card flat>
    <v-row>
      <v-col
        col="12"
        md="6"
      >
        <p>
          <strong>Jayaweld Industrial Supply Sdn Bhd (1082022-W)</strong> <br>
          <strong>Masterweld Technology Sdn Bhd (1030295-V)</strong> <br>
          <v-icon>mdi-map-marker</v-icon>3, Jalan TPP 5/17, Taman Perindustrian Puchong, Seksyen 5, 47160 Puchong, Selangor, Malaysia. <br>
          <v-icon>mdi-phone</v-icon>+603-8062 5780 <br>
          <v-icon>mdi-phone</v-icon>+603-8062 5600 <br>
          <v-icon>mdi-phone</v-icon>+603-8062 5622 <br>
          <v-icon>mdi-phone</v-icon>+603-8062 5633 <br>
          <v-icon>mdi-fax</v-icon>+603-8062 5781 <br>
          <v-icon>mdi-email</v-icon>jayaweld@gmail.com
        </p>
      </v-col>
      <v-col
        col="12"
        md="6"
      >
        <p>
          <strong>Jayaco Sales & Services Sdn Bhd (628690-M)</strong> <br>
          <strong>GST No.: 001606393856</strong> <br>
          <v-icon>mdi-map-marker</v-icon>8 & 8A, Jalan Kati F U19/F, Seksyen U19, Kg Baru Sg Buloh, 40160 Shah Alam, Selangor, Malaysia. <br>
          <v-icon>mdi-phone</v-icon>+603-6157 8901 <br>
          <v-icon>mdi-fax</v-icon>+603-6157 9108 <br>
          <v-icon>mdi-email</v-icon>jayaco88@yahoo.com.my <br>
        </p>
      </v-col>
      <v-col cols="12" class="text-center mb-2">
        <v-btn
          rounded
          size="large"
          append-icon="mdi-menu-down"
          color="#68b900"
          @click="showForm = !showForm"
        >
          Contact Now
        </v-btn>
      </v-col>
    </v-row>
    <v-expand-transition>
      <div v-show="showForm" class="pa-4">
        <v-form>
          <v-text-field prepend-icon="mdi-account" label="Name" outlined required></v-text-field>
          <v-text-field prepend-icon="mdi-domain" label="Company Name" outlined required></v-text-field>
          <v-text-field prepend-icon="mdi-email" label="Email" outlined required></v-text-field>
          <v-text-field prepend-icon="mdi-phone" label="Contact No." outlined></v-text-field>
          <v-text-field prepend-icon="mdi-phone" label="Handphone No." outlined></v-text-field>
          <v-textarea prepend-icon="mdi-message" label="Message" outlined rows="4"></v-textarea>
          <v-file-input
            v-model="form.attachment"
            label="Attachment"
            prepend-icon="mdi-paperclip"
            accept=".jpg,.png,.pdf,.doc,.docx"
            show-size
          />

          <div class="text-end mt-4">
            <v-btn color="#68b900" size="large" rounded>Send</v-btn>
          </div>
        </v-form>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);

const form = ref({
  name: "",
  email: "",
  message: "",
  attachment: null
})

const submitForm = () => {
  console.log("Form submitted:", form.value)
  alert("Form submitted! ✅ (you can now send this to your backend)")
}

const items = [
  {
    src: 'https://cdn1.npcdn.net/images/1459925803_610ceeb94cb57c1d8f401397ebf7d67f_en.jpg',
  },
  {
    src: 'https://cdn1.npcdn.net/images/1459925815_610ceeb94cb57c1d8f401397ebf7d67f_en.jpg',
  },
  {
    src: 'https://cdn1.npcdn.net/images/1449570486slide2.jpg',
  },
  {
    src: 'https://cdn1.npcdn.net/images/1464667670slide3_2.jpg',
  },
  {
    src: 'https://cdn1.npcdn.net/images/1459925803_610ceeb94cb57c1d8f401397ebf7d67f_en.jpg',
  },
]
</script>