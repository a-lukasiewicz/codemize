<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">
      HTML5 - Interview Questions
    </h3>
    <div class="flex items-start justify-center my-2">
      <div class="w-full my-1 sm:w-10/12">
        <ul class="flex flex-col">
          <Interview_Li
            question="Are the HTML tags and elements the same thing?"
            answer="No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag."
          />
          <Interview_Li
            question="What are tags and attributes in HTML?"
            answer="Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view."
          />
          <Interview_Li
            question="What are void elements in HTML?"
            answer="HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc."
          />
          <Interview_Li
            question="What is the ‘class’ attribute in HTML?"
            answer="The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements."
          />
          <Interview_Li
            question="Difference between link tag <link> and anchor tag <a>?"
            answer="The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag <link> defines a link between a document and an external resource and these are not clickable."
          />
        </ul>
      </div>
    </div>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import Interview_Li from './Interview_Li.vue';
</script>
