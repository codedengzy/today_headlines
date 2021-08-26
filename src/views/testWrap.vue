<template>
    <div>
        <testProps title="你好"></testProps>
    </div>
</template>
<script>
import testProps from '../components/testProps'

export default {
    props:['title'],
    components:{testProps}
}
</script>