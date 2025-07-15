define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6d59c631-5183-496a-88c7-109c871a5330",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StartAvgPriceProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(StartAvgPriceProcessMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "rocket-icon"
				},
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "ButtonRequest"
					},
					"clickMode": "default",
					"icon": "database-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_3sz2f5z",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_3sz2f5z"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_trdz4w2",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_trdz4w2"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commision",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommision_w0ngipb",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommision_w0ngipb",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn4_x4hnbjp",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn4_x4hnbjp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn5_kvzl4fb",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn5_kvzl4fb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_azbl2ug",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_azbl2ug_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_u1jzlsb",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_u1jzlsb",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_g2a6wuw",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_g2a6wuw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_0bsun0l",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_0bsun0l",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_7agx0xt",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_7agx0xt",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_zz3z28f",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_zz3z28f",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_qr84med",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_qr84med",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MultiSelectCategory",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelectCategory_label)#",
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentRealty",
					"selectSchemaName": "UsrCategoryInRealty",
					"selectColumnName": "UsrRealtyCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_a96u1th",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_a96u1th_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_902dsx2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_a96u1th",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4bonhw3",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_902dsx2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_f47wmjc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_f47wmjc_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_4bonhw3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_094afli",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_094afli_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_eh0zjd0DS"
						}
					}
				},
				"parentName": "FlexContainer_4bonhw3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_30wn7z4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_30wn7z4_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_4bonhw3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_wcl7411",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wcl7411_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_30wn7z4",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_aj9qnbu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_aj9qnbu_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_30wn7z4",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_smdm8cr",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_smdm8cr_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_smdm8cr_GridDetail_eh0zjd0",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_eh0zjd0"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_smdm8cr_SearchValue",
							"GridDetailSearchFilter_smdm8cr_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_4bonhw3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_tbinkn8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_a96u1th",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_eh0zjd0",
					"activeRow": "$GridDetail_eh0zjd0_ActiveRow",
					"selectionState": "$GridDetail_eh0zjd0_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_eh0zjd0_SelectionState"
					},
					"primaryColumnName": "GridDetail_eh0zjd0DS_Id",
					"columns": [
						{
							"id": "4a38846f-0d49-f937-3839-ec8332da82c4",
							"code": "GridDetail_eh0zjd0DS_UsrVisitDateAndTime",
							"caption": "#ResourceString(GridDetail_eh0zjd0DS_UsrVisitDateAndTime)#",
							"dataValueType": 7
						},
						{
							"id": "01ff00e6-8ba2-0e59-1a73-885293a2970d",
							"code": "GridDetail_eh0zjd0DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_eh0zjd0DS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "fcd84668-f0d9-22b2-2230-a57542dcb571",
							"code": "GridDetail_eh0zjd0DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_eh0zjd0DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_tbinkn8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eh0zjd0_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_eh0zjd0DS",
							"filters": "$GridDetail_eh0zjd0 | crt.ToCollectionFilters : 'GridDetail_eh0zjd0' : $GridDetail_eh0zjd0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_eh0zjd0_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eh0zjd0_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_eh0zjd0DS",
							"filters": "$GridDetail_eh0zjd0 | crt.ToCollectionFilters : 'GridDetail_eh0zjd0' : $GridDetail_eh0zjd0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_eh0zjd0_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_eh0zjd0_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_eh0zjd0_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_eh0zjd0 | crt.ToCollectionFilters : 'GridDetail_eh0zjd0' : $GridDetail_eh0zjd0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_eh0zjd0_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_eh0zjd0_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_eh0zjd0DS",
							"filters": "$GridDetail_eh0zjd0 | crt.ToCollectionFilters : 'GridDetail_eh0zjd0' : $GridDetail_eh0zjd0_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_eh0zjd0_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_iumojj5",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_iumojj5_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_zk6cmry",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_iumojj5",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rb22ukl",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_zk6cmry",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_8jzn7el",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_8jzn7el_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_rb22ukl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_a7e5xfn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_a7e5xfn_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_eh0zjd0DS"
						}
					}
				},
				"parentName": "FlexContainer_rb22ukl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_o6gbri4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_o6gbri4_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_rb22ukl",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_dtf663j",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_dtf663j_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "Button_o6gbri4",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_yymc73c",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_yymc73c_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "Button_o6gbri4",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_bhw1b0o",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_bhw1b0o_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_bhw1b0o_GridDetail_eh0zjd0",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_eh0zjd0"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_bhw1b0o_SearchValue",
							"SearchFilter_bhw1b0o_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_rb22ukl",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_scy31z4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_iumojj5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CategoryInRealty",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_rofrmjk",
					"activeRow": "$DataGrid_rofrmjk_ActiveRow",
					"selectionState": "$DataGrid_rofrmjk_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_rofrmjk_SelectionState"
					},
					"primaryColumnName": "DataGrid_rofrmjkDS_Id",
					"columns": [
						{
							"id": "407a62b2-f462-cde4-6aab-b5184e1c4714",
							"code": "DataGrid_rofrmjkDS_UsrParentRealty",
							"caption": "#ResourceString(DataGrid_rofrmjkDS_UsrParentRealty)#",
							"dataValueType": 10
						},
						{
							"id": "86bf2c94-4230-e10a-8da6-79b16bc20452",
							"code": "DataGrid_rofrmjkDS_UsrRealtyCategory",
							"caption": "#ResourceString(DataGrid_rofrmjkDS_UsrRealtyCategory)#",
							"dataValueType": 10
						},
						{
							"id": "080e34e2-0932-1532-3917-4ac2e632d18e",
							"code": "DataGrid_rofrmjkDS_CreatedOn",
							"caption": "#ResourceString(DataGrid_rofrmjkDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"bulkActions": [],
					"placeholder": false
				},
				"parentName": "GridContainer_scy31z4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rofrmjk_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rofrmjkDS",
							"filters": "$DataGrid_rofrmjk | crt.ToCollectionFilters : 'DataGrid_rofrmjk' : $DataGrid_rofrmjk_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rofrmjk_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "CategoryInRealty",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rofrmjk_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rofrmjkDS",
							"filters": "$DataGrid_rofrmjk | crt.ToCollectionFilters : 'DataGrid_rofrmjk' : $DataGrid_rofrmjk_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rofrmjk_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_rofrmjk_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_rofrmjk_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CategoryInRealty",
							"filters": "$DataGrid_rofrmjk | crt.ToCollectionFilters : 'DataGrid_rofrmjk' : $DataGrid_rofrmjk_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rofrmjk_SelectionState"
						}
					}
				},
				"parentName": "CategoryInRealty",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_rofrmjk_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_rofrmjkDS",
							"filters": "$DataGrid_rofrmjk | crt.ToCollectionFilters : 'DataGrid_rofrmjk' : $DataGrid_rofrmjk_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_rofrmjk_SelectionState"
						}
					}
				},
				"parentName": "CategoryInRealty",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_3sz2f5z": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn4_x4hnbjp": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrColumn5_kvzl4fb": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_u1jzlsb": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_g2a6wuw": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrArea_trdz4w2": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrNumber_7agx0xt": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCity_0bsun0l": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCountry_zz3z28f": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCommision_w0ngipb": {
						"modelConfig": {
							"path": "PDS.UsrCommision"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_qr84med": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_qr84med"
						}
					},
					"GridDetail_eh0zjd0": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_eh0zjd0DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_smdm8cr_GridDetail_eh0zjd0",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_bhw1b0o_GridDetail_eh0zjd0",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_eh0zjd0DS_UsrVisitDateAndTime": {
									"modelConfig": {
										"path": "GridDetail_eh0zjd0DS.UsrVisitDateAndTime"
									}
								},
								"GridDetail_eh0zjd0DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_eh0zjd0DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_eh0zjd0DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_eh0zjd0DS.CreatedOn"
									}
								},
								"GridDetail_eh0zjd0DS_Id": {
									"modelConfig": {
										"path": "GridDetail_eh0zjd0DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_rofrmjk": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_rofrmjkDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_rofrmjk_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_rofrmjkDS_UsrParentRealty": {
									"modelConfig": {
										"path": "DataGrid_rofrmjkDS.UsrParentRealty"
									}
								},
								"DataGrid_rofrmjkDS_UsrRealtyCategory": {
									"modelConfig": {
										"path": "DataGrid_rofrmjkDS.UsrRealtyCategory"
									}
								},
								"DataGrid_rofrmjkDS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_rofrmjkDS.CreatedOn"
									}
								},
								"DataGrid_rofrmjkDS_Id": {
									"modelConfig": {
										"path": "DataGrid_rofrmjkDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_rofrmjk_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_eh0zjd0DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_rofrmjkDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_qr84med": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_eh0zjd0DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateAndTime": {
									"path": "UsrVisitDateAndTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"DataGrid_rofrmjkDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrCategoryInRealty",
							"attributes": {
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrRealtyCategory": {
									"path": "UsrRealtyCategory"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		handlers: /**SCHEMA_HANDLERS*/[

			{

				request: "ButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price = await request.$context.PDS_UsrPriceUSD_o6qqcz6;

					console.log("Price = " + price);

					request.$context.PDS_UsrArea_glmjgg6 = price * 0.2;

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},
			{

				request: "crt.HandleViewModelAttributeChangeRequest",

				/* The custom implementation of the system query handler. */

				handler: async (request, next) => {

      					if (request.attributeName === 'PDS_UsrPrice_3sz2f5z' || 				             // if price changed

					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_qr84med' ) { 		// or percent changed

						var price = await request.$context.PDS_UsrPrice_3sz2f5z;

						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_qr84med;

						var commission = price * percent / 100;

						request.$context.PDS_UsrCommision_w0ngipb = commission;

					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},
			
			{

				request: "usr.RunWebServiceButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					console.log("Run web service button works...");

 

					// get id from type lookup type object

					var typeObject = await request.$context.PDS_UsrColumn5_kvzl4fb;

					var typeId = "";

					if (typeObject) {

						typeId = typeObject.value;

					}

 

					// get id from type lookup offer type object

					var offerTypeObject = await request.$context.PDS_UsrColumn5_kvzl4fb;

					var offerTypeId = "";

					if (offerTypeObject) {

						offerTypeId = offerTypeObject.value;

					}

 

					/* Create an instance of the HTTP client from @creatio-devkit/common. */

					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */

					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();

					const transferName = "rest";

					const serviceName = "RealtyService";

					const methodName = "GetMaxPriceByTypeId";

					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

					

					//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";

					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */

					var params = {

						realtyTypeId: typeId,

						realtyOfferTypeId: offerTypeId

					};

					const response = await httpClientService.post(endpoint, params);

					

					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);

					

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.

			Format the validator type in PascalCase. */

			"usr.DGValidator": {

				validator: function (config) {

					return function (control) {

						let value = control.value;

						let minValue = config.minValue;

						let valueIsCorrect = value >= minValue;

						var result;

						if (valueIsCorrect) {

							result = null;

						} else {

							result = {

								"usr.DGValidator": { 

									message: config.message

								}

							};

						}

						return result;

					};

				},

				params: [

					{

						name: "minValue"

					},

					{

						name: "message"

					}

				],

				async: false

			}
		}/**SCHEMA_VALIDATORS*/
	};
});