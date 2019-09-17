<template>
    <div class='h-100 w-100'>
        <h3>{{title}}</h3>
        <b-list-group class='w-100'>
            <b-list-group-item
                v-for='listItem in listItems'
                v-bind:key='listItemIdCallback(listItem)'>
                {{listItemContentCallback(listItem)}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>
<script lang='ts'>
import DetailPaneListContent from './DetailPaneListContent';
export default DetailPaneListContent;
</script>
