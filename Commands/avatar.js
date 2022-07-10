module.exports = ({
    name: "avatar",
    code: `
        $description[1; <@$findMember[$message]>'s avatar]
        $image[1; $userAvatar[$findMember[$message]]]
        $onlyIf[$checkContains[$channelType;text;news]==true;]`
      
    });