﻿namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalcAverageRealtyPriceProcessMethodsWrapper

	/// <exclude/>
	public class UsrCalcAverageRealtyPriceProcessMethodsWrapper : ProcessModel
	{

		public UsrCalcAverageRealtyPriceProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrRealty");
			
			var priceColumn = esq.AddColumn("UsrPrice");  // SELECT UsrPrice as UsrPrice, UsrArea as UsrArea FROM UsrRealty WHERE ...
			
			var areaColumn = esq.AddColumn("UsrArea");
			
			 
			
			Guid typeId = Get<Guid>("RealtyTypeIdParameter");
			
			Guid offerTypeId = Get<Guid>("RealtyOfferTypeIdParameter");
			
			 
			
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrType", typeId);
			
			esq.Filters.Add(typeFilter);
			
			 
			
			var offerTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOfferType", offerTypeId);
			
			esq.Filters.Add(offerTypeFilter); // ... WHERE UsrTypeId = :typeId AND UsrOfferTypeId = :offerTypeId
			
			 
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			
			Set("SqlTextParameter", sqlText);
			
			 
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			
			decimal totalINR = 0;
			
			decimal totalArea = 0;
			foreach(var entity in entityCollection) {
			
				decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name); // reading using column alias
			
				decimal area = entity.GetTypedColumnValue<decimal>(areaColumn.Name); // reading using column alias
			
				totalINR = totalINR + price;
			
				totalArea = totalArea + area;
			
			}
			
			 
			
			decimal result = 0;
			
			if (totalArea > 0) {
			
				result = totalINR / totalArea;
			
			}
			
			 
			
			Set("AvgPriceINRParameter", result);
			return true;
		}

		#endregion

	}

	#endregion

}

