$(document).ready(function () {
  // // `//////////////////////////
  //  for index html page start
  // /////////////////////////////

  // for mobile dropdown menu --->
  $(".mobile_menu_btn").click(function () {
    $(".mobile_menu").toggle();
  });

  // click functionality for Add Survey button
  $(".btn_addSurvey").click(function () {
    var tooltip = $(this).next(".cta_addSurvey_tooltip");

    var spaceAtBottom =
      $(window).height() - ($(this).offset().top + $(this).outerHeight());

    if (spaceAtBottom < tooltip.outerHeight()) {
      tooltip.css({ top: "auto", bottom: $(this).outerHeight() + "px" });
    } else {
      tooltip.css({ top: $(this).outerHeight() + "px", bottom: "auto" });
    }

    $(".cta_addSurvey_tooltip").not(tooltip).slideUp(350);

    tooltip.slideToggle(350);
  });

  // survey click event = when click three dots
  $(".survey_tooltip--Dots").click(function () {
    var dropdown = $(this)
      .closest(".survey_tooltip_blk")
      .find("#survey_tooltip--dropdown");
    dropdown.toggle();
  });

  // edit question offcanvas
  //this is for future code -------
  // $('.open_edit_question_offcanvas').click(function(){
  //     $('.edit_question_offcanvas , .edit_question_offcanvas_overlay').addClass('active');
  // })

  // $('.close_edit_question_overlay').click(function(){
  //     $('.edit_question_offcanvas, .edit_question_offcanvas_overlay').removeClass('active');
  // })

  // edit pill variable ------------
  $(".pill_variable_open").click(function () {
    $(
      ".pill_editId_input , .pill_select_open , .pwd_btn_blk,.pill_idText"
    ).toggle();
  });

  $(".pwd_save_click, .pwd_cancel_click").click(function () {
    $(
      ".pill_editId_input , .pill_select_open , .pwd_btn_blk,.pill_idText"
    ).toggle();
  });

  // edit pill variable ----------------
  $(".survey_pill").click(function () {
    var pill = $(this)
      .closest(".survey_question__blk")
      .find(".pill_dropdown_wrapper");

    pill.toggle();
  });

  // pill for everywhere ----------------
  $(".survey_pill").click(function () {
    var pill = $(this)
      .closest(".custom_pill__blk")
      .find(".pill_dropdown_wrapper");

    pill.toggle();
  });

  // accordion ----------------

  $(".accordion_click_blk").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".survey_parent_li")
      .find(".survey__answer_area,.accordion_close,.accordion_open")
      .toggle();
  });

  // page 4 list

  $(".accordion_click_blk_page").click(function (e) {
    e.preventDefault();
    $(this).find(".accordion_close_page,.accordion_open_page").toggle();

    $(".page_4_li_list").toggleClass("active");
  });

  // phase 2 background set --
  // audience question part --

  $(".accordion_click_blk").click(function (e) {
    $(this).closest(".survey_parent_li").toggleClass("active");
  });

  // check answer  --------------------

  $(".answer_click_blk").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".answer_single_child")
      .find(".ban_answer,.check_answer")
      .toggle();

    $(this)
      .closest(".answer_single_child")
      .find(".given_answer,.optional_answer, .edit_answer ,.delete_answer")
      .toggleClass("active");
  });

  //-------------------------

  $(".optional_answer").click(function (e) {
    e.preventDefault();
    $(this).closest(".answer_single_child").find(".modify_answer").toggle();
  });

  // edit answer ------------

  $(".edit_answer").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".answer_single_child")
      .find(".given_answer,.edited_version_answer")
      .toggle();
  });

  $(".yes_click_edit, .no_click_edit").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".answer_single_child")
      .find(".given_answer,.edited_version_answer")
      .toggle();
  });

  // delete answer ----------

  $(".delete_answer").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".answer_single_child")
      .find(".given_answer,.permanently_delete_answer")
      .toggle();
  });

  $(".yes_delete_answer, .no_delete_answer").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".answer_single_child")
      .find(".given_answer,.permanently_delete_answer")
      .toggle();
  });

  // history offcanvas ------
  $(".open_history_offcanvas").click(function () {
    $(".history_offcanvas , .offcanvas_overlay").addClass("active");
  });

  $(".survey_tooltip--x").click(function () {
    $(".history_offcanvas, .offcanvas_overlay").removeClass("active");
  });

  // survey popUp modal ------
  $(".restore_survey").click(function () {
    $(".restore_survey_popUp , .modal_overlay").addClass("active");
  });

  $(".close_modal").click(function () {
    $(".restore_survey_popUp , .modal_overlay").removeClass("active");
  });

  // settings offcanvas area js
  $(".offcanvas_open").click(function () {
    $(".offcanvas_area , .offcanvas_overlay").addClass("active");
  });

  $(".survey_tooltip--x").click(function () {
    $(".offcanvas_area, .offcanvas_overlay").removeClass("active");
  });

  // // `//////////////////////////
  //  for setting html page start
  // /////////////////////////////

  $(".survey_tooltip--asteric").on("mouseenter", function () {
    $(".showOnHover").show();
  });

  $(".survey_tooltip--asteric").on("mouseleave", function () {
    $(".showOnHover").hide();
  });

  $(".checkBox").click(function () {
    $(this).closest(".settings_click_wrapper").toggleClass("checked");

    var $wrapper = $(this).closest(".settings_click_wrapper");
    $wrapper
      .find(".settings_list_text, .checkEvent_area")
      .toggleClass("checked");

    $(this).closest(".settings_click_wrapper").toggleClass("slideOpen");
  });

  // // `//////////////////////////
  //  for validation html page start
  // /////////////////////////////

  $(".alert_show_message").click(function (e) {
    $(".alert_hide_message").toggleClass("active");
  });

  $(".file_upload_btn").click(function () {
    $(".Show_default_media").toggle();
    $(".show_fileUpload_media").toggle();
  });

  $(".file_cancel_btn").click(function () {
    $(".Show_default_media").toggle();
    $(".show_fileUpload_media").toggle();
  });

  //   phase 2 start

  //   hover pill start -------
  $(".survey_hover_pill").on("mouseenter", function () {
    $(".pill_hover_area").show();
  });

  $(".survey_hover_pill").on("mouseleave", function () {
    $(".pill_hover_area").hide();
  });

  // ban bll ---------
  $(".ban_wrapepr").on("mouseenter", function () {
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".ban_text,.disqualify_text")
      .show(150);
  });

  $(".ban_wrapepr").on("mouseleave", function () {
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".ban_text, .disqualify_text")
      .hide(150);
  });

  $(".ban_wrapepr").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".qualify_wrapper,.ban_wrapepr")
      .toggle();
  });

  // qualify bll -------
  $(".qualify_wrapper").on("mouseenter", function () {
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".qualified_text,.Qualify_text")
      .show(150);
  });

  $(".qualify_wrapper").on("mouseleave", function () {
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".qualified_text, .Qualify_text")
      .hide(150);
  });

  $(".qualify_wrapper").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".age_answer_module_list_blk")
      .find(".qualify_wrapper,.ban_wrapepr")
      .toggle();
  });

  // ai text --------
  $(".ai_blk").on("mouseenter", function () {
    $(".hover_ai_text").show(150);
  });

  $(".ai_blk").on("mouseleave", function () {
    $(".hover_ai_text").hide(150);
  });

  //customAnswer---------------------
  // input field open and close ----

  $(".answer_module_list__label").click(function () {
    $(this)
      .closest(".answer_module_list")
      .find(".answer_module_input_area, .answer_module_list__label")
      .toggle();
  });

  $(".input_ok , .input_cancel").click(function () {
    $(this)
      .closest(".answer_module_list")
      .find(".answer_module_input_area, .answer_module_list__label")
      .toggle();
  });

  // filter create audience question pill
  //   hover pill start -------
  $(".audience_hover_pill").on("mouseenter", function () {
    $(this)
      .closest(".pill_audience_event")
      .find(".audience_hover_pill_area")
      .show();
  });

  $(".audience_hover_pill").on("mouseleave", function () {
    $(this)
      .closest(".pill_audience_event")
      .find(".audience_hover_pill_area")
      .hide();
  });

  // for mobile dropdown menu --->
  $(".goT0_btn").click(function () {
    $(".goTo_hover_event").toggle(150);
  });

  //answer list for audienceQuestion -------------------------

  // designer overview html part ------------------------------
  // list part
  $(".audiences_survey_bottom_blk , .audience_close_tab").click(function () {
    $(this)
      .closest(".audiences_click_events")
      .find(".hide_bottom_audience_part ,.audiences_survey_bottom_blk")
      .toggle();
  });

  // header part
  $(
    ".designerOverview_header_progress_wrapper , .designOverview_header_close_tab"
  ).click(function () {
    $(this)
      .closest(".designerOverview_progress_click_event")
      .find(
        ".designerOverview_hide_part ,.designerOverview_header_progress_wrapper"
      )
      .toggle();
  });

  // toggle on off
  $(".toggle_area_blk").click(function () {
    $(".toggle_off_btn , .toggle_on_btn").toggle();
  });

  // (gender.html) toggle but same component everywhere ---------------------------

  $(".toggle_area_blk").click(function () {
    $(".select_unselect_btns_blk,.toggle_phase2_right").toggle();
  });

  // designer details ---------------

  $(".ddcn_text").on("mouseenter", function () {
    $(this)
      .closest(".designerDetails_click_numbre")
      .find(".ddcn_hover_blk")
      .show();
  });

  $(".ddcn_text").on("mouseleave", function () {
    $(this)
      .closest(".designerDetails_click_numbre")
      .find(".ddcn_hover_blk")
      .hide();
  });

  // pie hover
  $(".survey_tooltip--pie").on("mouseenter", function () {
    $(this).closest(".pie_hover_blk").find(".pie_hover_text").show(150);
  });

  $(".survey_tooltip--pie").on("mouseleave", function () {
    $(this).closest(".pie_hover_blk").find(".pie_hover_text").hide(150);
  });

  // phase 3 start
  // accordion ----------------

  $(".addElimiation_accordion_header").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".addElimination_accordion_single_wrapper")
      .find(".addElimiation_accordion_body,.accordion_close,.accordion_open")
      .toggle();
  });

  // run btn  ----------------

  $(".run_table_btn").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".run_blk")
      .find(".hide_run_btn_blk,.run_table_btn")
      .toggle();
  });

  $(".survey_tooltip--chart").click(function (e) {
    e.preventDefault();
    $(this)
      .closest(".table_btn_chart")
      .find(".table_btn_chart_details")
      .toggle();
  });

  // phase 4 start ================

  $(".open_dashboard_btn").click(function () {
    $(this)
      .closest(".dashboard_single_item_content")
      .find(".dashboard_open_hide_blk")
      .toggle(top, 150);

    $(this)
      .closest(".dashboard_single_item_content")
      .find(".designerOverview_progress_click_event")
      .toggleClass("active");
  });

  // setUp btn event
  $(".setUp_btn_click").click(function () {
    $(this).closest(".setUp_btn_blk").find(".setup_click_content").toggle(150);

    $(".animate_caret").toggleClass("active");
  });

  // createNewProject tabs
  // $(".createNewProject_click_btn").click(function () {
  //   $(".project_action_wrapper_category, .slice_line_category").toggleClass("active")
  // });

  // $(".all_template_btn").click(function () {
  //   $(".project_action_wrapper_templates").toggleClass("active")
  // });

  $(".createNewProject_click_btn").click(function () {
    // Close templates if open
    if ($(".project_action_wrapper_templates").hasClass("active")) {
      $(".project_action_wrapper_templates").removeClass("active");
    }

    // Toggle category and slice line
    $(".project_action_wrapper_category, .slice_line_category").toggleClass(
      "active"
    );
  });

  $(".all_template_btn").click(function () {
    $(".project_action_wrapper_templates").toggleClass("active");
  });

  $(".create_ai_btn").click(function () {
    $(".create_ai_wrapper").toggleClass("active");
  });

  // collapse item
  $(".dashboard_single_item_header").click(function () {
    $(this)
      .closest(".dashboard_single_item")
      .find(".dashboard_single_item_content , .expand_item , .collapse_item")
      .toggle();
  });

  // collapse item
  $(".custom_check_components").click(function () {
    $(this).find(".checked_item , .unChecked_item").toggle();

    $(this).toggleClass("active");
  });

  // ----------- phase 5 start ------

  //audience balance click items--
  $(".toggle_bars").click(function () {
    $(this)
      .closest(".audienceBalance_lists_wrapper")
      .find(".audienceBalance_lists_content , .expand_item , .collapse_item")
      .toggle();
  });

  // manageAudience click events start from here

  $(".launch_audience_btn").click(function () {
    $(".audienceBalance_cost_area,.launch_audience_btn").toggle();
  });

  $(".payment_cancel_btn").click(function () {
    $(".audienceBalance_cost_area,.launch_audience_btn").toggle();
  });


  // all modal start -------

  // payment modal
  $(".payment_confirm_btn ,.paymentModal_x,.pm_cancel").click(function(){
    $(".paymentModal_wrapper_popUp").toggle();
  });

  // edit modal 
  $(".paymentModal_edit_btn , .cancel_editBillModal_btn, .editBillModal_x").click(function(){
    $(".editBillModal__popUp,.paymentModal_wrapper_popUp").toggle();
  });

  // payment button modal 
  $(".stripe_btn , .paypal_btn ,.confirmModal_x,.confirmModal_close_btn").click(function(){
    $(".confirmModal__popUp").toggle();
    $(".paymentModal_wrapper_popUp").removeAttr("style");
  });

});
