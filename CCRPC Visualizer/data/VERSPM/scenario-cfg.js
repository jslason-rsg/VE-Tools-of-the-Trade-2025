var scenconfig = [
  {
    "NAME": ["L"],
    "LABEL": ["Land Use & Community Design"],
    "DESCRIPTION": ["Distribution of population."],
    "INSTRUCTIONS": ["The form in which development occurs (density, regional assessibility, mixed use, etc.) represented by the distribution of population and employment by place type."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["MTP land use"]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Additional growth in CC"],
        "DESCRIPTION": ["Same net population as L1, with additional 10% population and housing growth in Chittenden County. More walkable and mixed-use development."]
      }
    ]
  },
  {
    "NAME": ["X"],
    "LABEL": ["Bike & Transit"],
    "DESCRIPTION": ["Level of public transit service and bike infrastructure."],
    "INSTRUCTIONS": ["Level of public transit service and bike infrastructure."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Current extent and frequency of transit service and bike infrastructure."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Double"],
        "DESCRIPTION": ["Double bike infrastructure and increase transit service and frequency by 50%."]
      },
	  {
        "NAME": ["3"],
        "LABEL": ["Triple"],
        "DESCRIPTION": ["Double bike infrastructure and increase transit service and frequency by 200%."]
      }
    ]
  },
  {
    "NAME": ["Y"],
    "LABEL": ["Demand Managment"],
    "DESCRIPTION": ["Programs to encourage less private vehicle travel."],
    "INSTRUCTIONS": ["Programs to encourage less private vehicle travel."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Current level of participation in TDM programs and extent of paid parking."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Double"],
        "DESCRIPTION": ["Double level of participation in TDM programs and increase extent of paid parking to more downtown areas."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["More paid parking"],
        "DESCRIPTION": ["Double level of participation in TDM programs and increase extent of paid parking to more downtown areas and village centers."]
      }
    ]
  },
  {
    "NAME": ["Z"],
    "LABEL": ["Pricing"],
    "DESCRIPTION": ["Policies that raise the cost of vehicular travel."],
    "INSTRUCTIONS": ["Policies that raise the cost of vehicular travel."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Existing policies."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Carbon tax"],
        "DESCRIPTION": ["Carbon tax of $50.00/ ton CO2e"]
      },
	  {
        "NAME": ["3"],
        "LABEL": ["Double fuel cost"],
        "DESCRIPTION": ["Double the retail cost of gasoline, diesel, and electricity."]
      },
	  {
        "NAME": ["4"],
        "LABEL": ["VMT tax"],
        "DESCRIPTION": ["VMT tax of 5 cents per vehicle mile traveled."]
      }
    ]
  },
  {
    "NAME": ["W"],
    "LABEL": ["Vehicles"],
    "DESCRIPTION": ["Policies and services related to non-household vehicles."],
    "INSTRUCTIONS": ["Policies and services related to non-household vehicles."],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Base level of non-household vehicle powertrains and ridehailing services."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["VMT Tax"],
        "DESCRIPTION": ["Decrease the cost and increase the availability of ridehailing services, increase EV adoption to 90% for commercial service, ridehailing, and transit vehicles."]
      }
    ]
  },
  
  {
    "NAME": ["I"],
    "LABEL": ["Income"],
    "DESCRIPTION": ["Real average household income in 2010 USD."],
    "INSTRUCTIONS": [""],
    "LEVELS": [
      {
        "NAME": ["1"],
        "LABEL": ["Base"],
        "DESCRIPTION": ["Baseline household income."]
      },
      {
        "NAME": ["2"],
        "LABEL": ["Increase disparity"],
        "DESCRIPTION": ["More households in lower and upper class, smaller middle class."]
      },
      {
        "NAME": ["3"],
        "LABEL": ["Decrease disparity"],
        "DESCRIPTION": ["Less households in lower and upper class, larger middle class."]
      }
    ]
  }
];
