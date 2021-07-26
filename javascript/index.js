$(".project").on("click", function(){
    
    if ($(this).find(".project-desc").hasClass("expanded")) {
        console.log("clicked")
        $(this).find(".project-desc").remove()
        $(this).append("<p class=\"project-desc info\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi nisi, mattis sit amet nisi fermentum, feugiat ultricies purus. Nulla facilisi. Aliquam porttitor pulvinar suscipit. <span>Read More.</span></p>")
        // $(this).find(".toggleContainer").toggleClass("active");
    } else {
        $(this).find(".project-desc").remove()
        $(this).append("<p class=\"project-desc info expanded\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi nisi, mattis sit amet nisi fermentum, feugiat ultricies purus. Nulla facilisi. Aliquam porttitor pulvinar suscipit. Mauris maximus sodales convallis. Praesent sed lacus vel risus dictum semper eu quis nisi. Sed sed efficitur felis, sed ultrices dui. Suspendisse quis dignissim purus. Nulla pulvinar sodales neque sed finibus. Quisque feugiat molestie elit, tincidunt congue justo volutpat sit amet. <span>Read Less.</span></p>")
    }
})
